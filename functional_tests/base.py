import os
import unittest
import time
from datetime import datetime


from selenium import webdriver
from selenium.webdriver.firefox.options import Options
from selenium.common.exceptions import WebDriverException
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities

MAX_WAIT = 10


def wait(fn):
    def modified_fn(*args, **kwargs):
        start_time = time.time()
        while True:
            try:
                return fn(*args, **kwargs)
            except (AssertionError, WebDriverException) as e:
                if time.time() - start_time > MAX_WAIT:
                    raise e
                time.sleep(0.5)
    return modified_fn


SCREEN_DUMP_LOCATION = os.path.join(
    os.path.dirname(os.path.abspath(__file__)), 'screendumps'
)


class FunctionalTest(unittest.TestCase):

    # GRID
    def setUp(self):

        # capabilities = {
        #     "browserName": "opera",
        #     "enableVNC": True,
        #     "enableVideo": False,
        #     "operaOptions": {"binary": "/usr/bin/opera"},
        # }

        self.browserName = os.getenv('BROWSER', 'chrome')

        capabilities = {
            "browserName": self.browserName,
            "enableVNC": True,
            "enableVideo": False,
            "ie.ensureCleanSession": True,  # IE needs this to clear localStorage. Nukes all IE though!
        }

        # capabilities = {
        #     "browserName": 'safari',
        #     "enableVNC": False,
        #     "enableVideo": False
        # }

        self.browser = webdriver.Remote(
            # command_executor="http://192.168.0.100:4445/wd/hub",
            # command_executor="http://192.168.0.121:4445/wd/hub",
            # command_executor="http://192.168.0.168:4445/wd/hub",
            # command_executor="http://192.168.0.123:4444/wd/hub",
            # command_executor="http://test:test-password@192.168.0.168:4444/wd/hub",
            command_executor="http://test:test-password@82.8.135.18:4444/wd/hub",
            desired_capabilities=capabilities)

        self.browser.maximize_window()

        # self.live_server_url = 'https://winton:development@prostate.dev.wintoncentre.uk'
        self.live_server_url = 'https://prostate.dev.wintoncentre.uk'
        # self.live_server_url = 'https://prostate.predict.nhs.uk/'

    # def setUp(self):
    #     browser = os.getenv('BROWSER', 'chrome')
    #     options = Options()
    #     # options.add_experimental_option("excludeSwitches", ['enable-automation'])
    #     if browser == 'chrome':
    #         self.browser = webdriver.Chrome(options=options)
    #     if browser== 'firefox':
    #         self.browser = webdriver.Firefox(options=options)
    #     if browser== 'safari':
    #         self.browser = webdriver.Safari()
    #
    #     self.browser.maximize_window()
    #
    #     # self.live_server_url = 'http://localhost:5449/'
    #     # self.live_server_url = 'http://localhost:8101/'
    #     # self.live_server_url = 'https://winton:development@prostate.dev.wintoncentre.uk'
    #     self.live_server_url = 'https://prostate.dev.wintoncentre.uk'
    #     # self.live_server_url = 'https://prostate.predict.nhs.uk/'
    #
    #     # self.staging_server = os.environ.get('STAGING_SERVER')
    #     # if self.staging_server:
    #     #     self.live_server_url = 'http://' + self.staging_server

    def tearDown(self):
        # if self._test_has_failed():
        #     if not os.path.exists(SCREEN_DUMP_LOCATION):
        #         os.makedirs(SCREEN_DUMP_LOCATION)
        #     for ix, handle in enumerate(self.browser.window_handles):
        #         self._windowid = ix
        #         self.browser.switch_to_window(handle)
        #         self.take_screenshot()
        #         self.dump_html()

        # IE shared it's session for all. Doesn't create isolated environment like Firefox or Chrome.
        if self.browserName == 'internet explorer':
            self.browser.execute_script('localStorage.clear();')

        self.browser.quit()
        super().tearDown()

    # def _test_has_failed(self):
    #     # slightly obscure but couldn't find a better way!
    #     return any(error for (method, error) in self._outcome.errors)
    #
    # def take_screenshot(self):
    #     filename = self._get_filename() + '.png'
    #     print('screenshotting to', filename)
    #     self.browser.get_screenshot_as_file(filename)
    #
    # def dump_html(self):
    #     filename = self._get_filename() + '.html'
    #     print('dumping page HTML to', filename)
    #     with open(filename, 'w') as f:
    #         f.write(self.browser.page_source)
    #
    # def _get_filename(self):
    #     timestamp = datetime.now().isoformat().replace(':', '.')[:19]
    #     return '{folder}/{classname}.{method}-window{windowid}-{timestamp}'.format(
    #         folder=SCREEN_DUMP_LOCATION,
    #         classname=self.__class__.__name__,
    #         method=self._testMethodName,
    #         windowid=self._windowid,
    #         timestamp=timestamp
    #     )

    @wait
    def wait_for(self, fn):
        return fn()
