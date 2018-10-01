(ns interop.mixpanel
  (:require [clojure.string :as str]))

(def mixpanel (goog.object.get js/window "mixpanel"))

(defonce time-tracker (atom {}))

(defn event->keyword [event]
  (keyword (str/replace (str/lower-case event) #" " "-")))


(defn event-last-time [event]
  (get-in @time-tracker [(event->keyword event) :time]))

(defn event-params [event]
  (or (get-in @time-tracker [(event->keyword event) :params]) {}))

(defn current-time []
  (.getTime (js/Date.)))

(defn event-duration [event]
  (if (some? event-last-time)
    (/ 1000 (- (current-time) (event-last-time event)))))


(defn update-event-last-execution [event & params]
  (swap! time-tracker update-in [(event->keyword event) :time] current-time)
  (swap! time-tracker update-in [(event->keyword event) :params] identity params)
  )

(declare track)

(defn track-time [event]
  (if (some? (event-last-time event))
    (track (str "Time " event) (merge (event-params event) {:duration (event-duration event)}))
    ))

(defn track
  ([event] (.track mixpanel event))
  ([event params & [time-tracking]]

   (if (true? time-tracking)
     (track-time event))

   (.track mixpanel event (clj->js params))

   (if (true? time-tracking)
     (update-event-last-execution event params))
    ))



