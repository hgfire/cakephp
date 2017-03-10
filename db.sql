CREATE DATABASE IF NOT EXISTS studentsman;
use 'studentsman';
CREATE TABLE IF NOT EXISTS `students` (
  `matricule` varchar(11) NOT NULL,
  `firstname` varchar(32) NOT NULL,
  `lastname` varchar(32) NOT NULL,
  `birthdate` datetime,
  `deleted` tinyint(1) DEFAULT 0,
  `modified` Datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`matricule`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=58 ;

CREATE TABLE IF NOT EXISTS `marks` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `matricule` varchar(11) NOT NULL,
  `lesson` varchar(32) ,
  `mark` int(1) NOT NULL,
  `modified` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `StudentsFKMarks` (`matricule`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=58 ;


--
-- Contraintes pour la table `gifts`
--
ALTER TABLE `marks`
  ADD CONSTRAINT `StudentsFKMarks` FOREIGN KEY (`matricule`) REFERENCES `students` (`matricule`);