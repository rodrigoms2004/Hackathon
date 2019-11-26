USE rocket_hackathon;

CREATE TABLE IF NOT EXISTS `Users` (
  `username` VARBINARY(45) NOT NULL,
  `email` VARBINARY(45) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `password` VARCHAR(100) NOT NULL,
  `createdAt` BIGINT NOT NULL,
  `profile` INT NOT NULL,
  PRIMARY KEY (`username`))
ENGINE = InnoDB;


-- PROFILE
-- 1 = aluno
-- 2 = professor
-- 3 = empresa


select
	convert(us.username, char) as username,
    convert(us.password, char) as password,
    name,
    password,
    createdAt,
    profile
from Users us;
