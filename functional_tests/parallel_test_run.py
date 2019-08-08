from subprocess import Popen
import webcolors

chrome_cmd = 'export BROWSER=chrome && python test.py'
firefox_cmd = 'export BROWSER=firefox && python test.py'
opera_cmd = 'export BROWSER=opera && python test.py'
safari_cmd = 'export BROWSER=safari && python test.py'
ie_cmd = 'export BROWSER="internet explorer" && python test.py'
# OPERA NOT WORKING ON 62 !

all_tests = [chrome_cmd, firefox_cmd, opera_cmd, safari_cmd, ie_cmd]
all_tests = [chrome_cmd, firefox_cmd, opera_cmd, safari_cmd]
# all_tests = [chrome_cmd, firefox_cmd, opera_cmd, ie_cmd]
# all_tests = [chrome_cmd, firefox_cmd] * 4
# all_tests = [chrome_cmd]
# all_tests = [firefox_cmd]
# all_tests = [opera_cmd]
# all_tests = [safari_cmd]
# all_tests = [ie_cmd]

processes = []


for a_test_run in all_tests:
    processes.append(Popen(a_test_run, shell=True))

for i in range(len(all_tests)):
    processes[i].wait()
