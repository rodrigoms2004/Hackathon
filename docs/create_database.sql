create database rocket_hackathon;

GRANT ALL on rocket_hackathon.* TO 'user'@'localhost' identified by 'pass';
GRANT ALL on rocket_hackathon.* TO 'user'@'%' identified by 'pass';
FLUSH PRIVILEGES;
