import subprocess

reactApp = "git@github.com:computerbox124/web-mobile-assignment-3-backend.git"
subprocess.run(["git", "clone", reactApp])

command1 = "sudo npm install"
command2 = "json-server --watch web-mobile-assignment-3-backend/db.json"
command3 = "npm start"


subprocess.run(command1, shell=True)

print("--------Running backend!--------")
process = subprocess.Popen(command2, shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE, close_fds=True)

print("---------Running reactApp!----------")
subprocess.run(command3, shell=True)

