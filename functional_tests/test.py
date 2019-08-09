import unittest
from base import FunctionalTest
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.action_chains import ActionChains
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException
import time, os, random

from utils import standardize_colour


class NewVisitorTest(FunctionalTest, unittest.TestCase):

    def setUp(self):
        super().setUp()

    def tearDown(self):
        super().tearDown()

    @classmethod
    def tearDownClass(cls) -> None:
        super().tearDownClass()

    def test_user_can_see_correct_homepage(self):
        # New user John goes to predict website.
        self.browser.get(self.live_server_url)

        # John waits 2 seconds for website to load
        time.sleep(2)

        # John sees that "Predict Breast" is in browser title
        self.assertIn('Predict Prostate', self.browser.title)

        # John sees Dark grayish blue H1 title
        intro_title = self.browser.find_element_by_tag_name('h1')
        self.assertIn('Predict Prostate', intro_title.text)
        self.assertEqual('rgba(119, 119, 153, 1)', standardize_colour(intro_title.value_of_css_property('color')))

        # John sees Start Predict button
        start_predict_button = self.browser.find_element_by_css_selector('button.btn-lg')
        self.assertIn('Start Predict', start_predict_button.text)

        # John sees version number on bottom right of the screen
        build_number = self.browser.find_element_by_class_name('build-version')
        # self.assertEqual('Build: v0.0-dev-#000-hash', build_number.text)
        # self.assertEqual('v1.03-44-ge736fbe failed test ', build_number.text)
        self.assertNotEqual('v0.0-dev-#000-hash', build_number.text)

        # if random.randint(0, 10) < 4:
        #     self.fail('Force fail to test')


class NewVisitorGDPRTest(FunctionalTest, unittest.TestCase):

    def setUp(self):
        super().setUp()

    def tearDown(self):
        super().tearDown()

    @classmethod
    def tearDownClass(cls) -> None:
        super().tearDownClass()

    def test_user_can_see_gdpr_sticky_div(self):
        # New user John goes to predict website.
        self.browser.get(self.live_server_url)

        # John waits 2 seconds for website to load
        time.sleep(2)

        # John sees sticky GDPR bar on bottom of the page. See it's dark colour.
        gdpr_bar = self.browser.find_element_by_class_name('gdpr-container')
        self.assertEqual('block', gdpr_bar.value_of_css_property('display'))
        self.assertEqual('rgba(255, 165, 0, 1)', standardize_colour(gdpr_bar.value_of_css_property('background-color')))

        # John sees sticky GDPR bar has ok button
        gdpr_ok_input = self.browser.find_element_by_css_selector('input.btn-sm')
        self.assertEqual('I agree to Terms and Conditions', gdpr_ok_input.get_attribute('value'))

        # # check sticky by scroll down and seeing if it's still there?
        # self.browser.execute_script("window.scrollTo(0, document.body.scrollHeight);")
        # time.sleep(2)

    def test_user_can_agree_gdpr_terms_conditions_div(self):
        # New user John goes to predict website.
        self.browser.get(self.live_server_url)

        # John waits 2 seconds for website to load
        time.sleep(2)

        # John clicks Terms and Conditions and ok. Sees GDPR bar disappear
        # gdpr_analytics_checkbox = self.browser.find_element_by_id('analyticsCheckBox')
        # gdpr_tc_checkbox = self.browser.find_element_by_id('tcCheckbox')

        gdpr_ok_input = self.browser.find_element_by_css_selector('input.btn-sm')
        # self.assertEqual('I agree to Terms and Conditions', gdpr_ok_input.get_attribute('value'))

        # gdpr_tc_checkbox.click()
        # time.sleep(3)  # Check if it gets ticked

        # Before clicking ok, gdpr div is still visible
        gdpr_bar = self.browser.find_element_by_class_name('gdpr-container')
        self.assertEqual('block', gdpr_bar.value_of_css_property('display'))
        gdpr_ok_input.click()

        # After clicking ok, gdpr div is no longer visible
        time.sleep(3)
        self.assertEqual('none', gdpr_bar.value_of_css_property('display'))
        time.sleep(3)

    def test_user_can_agree_gdpr_analytics_and_terms_conditions_div(self):
        # New user John goes to predict website.
        self.browser.get(self.live_server_url)

        # John waits 2 seconds for website to load
        time.sleep(2)

        # John clicks Analytics, Terms and Conditions and finally ok. Sees GDPR bar disappear
        gdpr_analytics_checkbox = self.browser.find_element_by_id('analyticsCheckBox')
        # gdpr_tc_checkbox = self.browser.find_element_by_id('tcCheckbox')

        gdpr_ok_input = self.browser.find_element_by_css_selector('input.btn-sm')
        # self.assertEqual('Ok', gdpr_ok_input.get_attribute('value'))

        gdpr_analytics_checkbox.click()
        # time.sleep(0.5)
        # gdpr_tc_checkbox.click()
        time.sleep(3)  # Check if it gets ticked

        # Before clicking ok, gdpr div is still visible
        gdpr_bar = self.browser.find_element_by_class_name('gdpr-container')
        self.assertEqual('block', gdpr_bar.value_of_css_property('display'))
        gdpr_ok_input.click()
        # After clicking ok, gdpr div is no longer visible
        time.sleep(3)
        self.assertEqual('none', gdpr_bar.value_of_css_property('display'))
        time.sleep(3)

    # No longer relevent unless we decide later to not able to send form without explict agreeing
    # def test_user_can_does_not_tick_check_box_and_press_ok(self):
    #     # New user John goes to predict website.
    #     self.browser.get(self.live_server_url)
    #
    #     # John waits 2 seconds for website to load
    #     time.sleep(2)
    #
    #     # John sees Ok button for GDPR and presses it
    #     gdpr_ok_input = self.browser.find_element_by_css_selector('input.btn-sm')
    #     # self.assertEqual('Ok', gdpr_ok_input.get_attribute('value'))
    #
    #     # Before clicking ok, gdpr div is still visible
    #     gdpr_bar = self.browser.find_element_by_class_name('gdpr-container')
    #     self.assertEqual('block', gdpr_bar.value_of_css_property('display'))
    #     gdpr_ok_input.click()
    #     # After clicking ok, gdpr div is still visible
    #     time.sleep(3)
    #     self.assertEqual('block', gdpr_bar.value_of_css_property('display'))
    #     time.sleep(3)

    def test_user_agreed_to_tracking_sees_hotjar(self):
        # Initial condition to have GPDR enabled
        self.browser.get(self.live_server_url)
        gdpr_analytics_checkbox = self.browser.find_element_by_id('analyticsCheckBox')
        gdpr_ok_input = self.browser.find_element_by_css_selector('input.btn-sm')
        gdpr_analytics_checkbox.click()
        gdpr_ok_input.click()

        # internet explorer Hotjar disabled for now.
        if os.getenv('BROWSER') == 'internet explorer':
            print('Ignoring test for hotjar it appears support for IE9 is dropped')
        if not os.getenv('BROWSER') == 'internet explorer':
            try:
                # John can see hotjar popping up. (If this doesn't exist, it means hotjar hasn't come through and there is error)
                print("hotjar_injected_div waiting for ... ")
                hotjar_injected_div = WebDriverWait(self.browser, 20).until(
                    EC.presence_of_element_located((By.ID, "_hj_poll_container"))
                )
                print("found hotjar_injected_div")
            except TimeoutException as e:
                print(f"Waited 20 second but can not find hotjar_injected_div - {e} - {os.getenv('BROWSER')}")
                raise TimeoutException

        time.sleep(5)


class NewVisitorCanUseTools(FunctionalTest, unittest.TestCase):

    def setUp(self):
        super().setUp()
        # New user John goes to predict website.
        self.browser.get(self.live_server_url)

        # John waits 2 seconds for website to load
        time.sleep(2)

        # Temp work around for locally hosted dev test
        # John sees Start Predict button and clicks it.
        start_predict_button = self.browser.find_element_by_css_selector('button.btn-lg')
        start_predict_button.click()

        # John waits 2 seconds for tools page to load
        time.sleep(2)

    def tearDown(self):
        super().tearDown()

    @classmethod
    def tearDownClass(cls) -> None:
        super().tearDownClass()

    def test_user_does_not_see_results_initially(self):
        #results
        info_disabled_text_icon = self.browser.find_element_by_class_name('fa-info-circle')
        info_disabled_text = info_disabled_text_icon.find_element_by_xpath('..')
        self.assertIn('Treatment options and results will appear here when you have filled in all the information needed above.'
                      , info_disabled_text.text)

    def test_user_add_sensible_input_and_see_results(self):
        # John add details into the page
        input_age = self.browser.find_element_by_id('age')
        input_age.click()
        input_age.clear()
        # Work around for chrome
        input_age.send_keys("6")
        input_age.send_keys("6")

        input_psa = self.browser.find_element_by_id('psa')
        input_psa.clear()
        input_psa.send_keys("3")

        input_clinical_t_stage = self.browser.find_element_by_xpath('//div[@aria-label="Clinical T stage"]/button[2]')
        input_clinical_t_stage.click()

        input_hospital_admission = self.browser.find_element_by_xpath('//div[@aria-label="Hospital admission in last 2 years?"]/button[1]')
        input_hospital_admission.click()

        input_brca = self.browser.find_element_by_xpath('//div[@aria-label="BRCA"]/button[1]')
        input_brca.click()

        input_metastasis = self.browser.find_element_by_xpath('//div[@aria-label="Has the cancer spread (metastasis)?"]/button[1]')
        input_metastasis.click()

        input_histological_grade = self.browser.find_element_by_xpath('//div[@aria-label="Histological grade group"]/button[2]')
        input_histological_grade.click()

        # leave Gleason score for now

        input_detected_by = self.browser.find_element_by_xpath('//div[@aria-label="Biopsy data available?"]/button[1]')
        input_detected_by.click()

        time.sleep(1)

        # John scroll down to see results. John can see new heads have appeared.
        h3_tags = self.browser.find_elements_by_tag_name('h3')
        h3_tag_result = h3_tags[0]
        # h3_tag_options = h3_tags[1]

        # actions = ActionChains(self.browser)
        # actions.move_to_element(h3_tag_result).perform()

        # So that us tester can see the page.
        body = self.browser.find_element_by_css_selector('body')
        body.send_keys(Keys.PAGE_DOWN)

        self.assertIn('Results', h3_tag_result.text)
        # self.assertIn('Treatment Options', h3_tag_options.text)

        # # How to distinguish between results show or not showing?
        time.sleep(3)


if __name__ == '__main__':
    unittest.main(warnings='ignore')
