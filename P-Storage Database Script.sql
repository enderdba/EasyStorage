SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`almacen`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`almacen` (
  `IDALMACEN` INT(11) NOT NULL AUTO_INCREMENT,
  `NOMBRE` VARCHAR(45) NOT NULL,
  `UNILIBRES` INT(11) NOT NULL,
  `UNIMAX` INT(11) NOT NULL,
  PRIMARY KEY (`IDALMACEN`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `mydb`.`tamano`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`tamano` (
  `IDTAMANO` INT(11) NOT NULL,
  `UNIDADES` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`IDTAMANO`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `mydb`.`contenedor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`contenedor` (
  `IDCONTENEDOR` INT(11) NOT NULL AUTO_INCREMENT,
  `ALMACEN_IDALMACEN` INT(11) NOT NULL,
  `TAMANO_IDTAMANO` INT(11) NOT NULL,
  `PESO` DOUBLE NOT NULL,
  `COLOR` VARCHAR(20) NULL DEFAULT NULL,
  `LOTE` VARCHAR(25) NOT NULL,
  PRIMARY KEY (`IDCONTENEDOR`),
  INDEX `fk_CONTENEDOR_ALMACEN_idx` (`ALMACEN_IDALMACEN` ASC),
  INDEX `fk_CONTENEDOR_TAMANO1_idx` (`TAMANO_IDTAMANO` ASC),
  CONSTRAINT `fk_CONTENEDOR_ALMACEN`
    FOREIGN KEY (`ALMACEN_IDALMACEN`)
    REFERENCES `mydb`.`almacen` (`IDALMACEN`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_CONTENEDOR_TAMANO1`
    FOREIGN KEY (`TAMANO_IDTAMANO`)
    REFERENCES `mydb`.`tamano` (`IDTAMANO`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `mydb`.`tipodeusuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`tipodeusuario` (
  `IDTIPODEUSUARIO` INT(11) NOT NULL AUTO_INCREMENT,
  `ADMUSUARIOS` TINYINT(1) NOT NULL,
  `ADMALMACEN` TINYINT(1) NOT NULL,
  `GENREPORTE` TINYINT(1) NOT NULL,
  `ADMTRASLADO` TINYINT(1) NOT NULL,
  `NOMBRE` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`IDTIPODEUSUARIO`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `mydb`.`traslado`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`traslado` (
  `IDTRASLADO` INT(11) NOT NULL AUTO_INCREMENT,
  `FECHA` DATE NOT NULL,
  `CONTENEDOR_IDCONTENEDOR` INT(11) NOT NULL,
  `ALMACEN_IDALMACEN1` INT(11) NOT NULL,
  `ALMACEN_IDALMACEN2` INT(11) NOT NULL,
  PRIMARY KEY (`IDTRASLADO`, `ALMACEN_IDALMACEN2`),
  INDEX `fk_TRASLADO_CONTENEDOR1_idx` (`CONTENEDOR_IDCONTENEDOR` ASC),
  INDEX `fk_TRASLADO_ALMACEN1_idx` (`ALMACEN_IDALMACEN1` ASC),
  INDEX `fk_TRASLADO_ALMACEN2_idx` (`ALMACEN_IDALMACEN2` ASC),
  CONSTRAINT `fk_TRASLADO_ALMACEN1`
    FOREIGN KEY (`ALMACEN_IDALMACEN1`)
    REFERENCES `mydb`.`almacen` (`IDALMACEN`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_TRASLADO_ALMACEN2`
    FOREIGN KEY (`ALMACEN_IDALMACEN2`)
    REFERENCES `mydb`.`almacen` (`IDALMACEN`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_TRASLADO_CONTENEDOR1`
    FOREIGN KEY (`CONTENEDOR_IDCONTENEDOR`)
    REFERENCES `mydb`.`contenedor` (`IDCONTENEDOR`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `mydb`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`usuario` (
  `IDUSUARIO` INT(11) NOT NULL AUTO_INCREMENT,
  `TIPODEUSUARIO_IDTIPODEUSUARIO` INT(11) NOT NULL,
  `COD_TRABAJADOR` VARCHAR(10) NOT NULL,
  `NOMBRE` VARCHAR(45) NOT NULL,
  `FECHA_NACIMIENTO` DATE NOT NULL,
  `TELEFONO` VARCHAR(25) NOT NULL,
  `PASSWORD` VARCHAR(16) NOT NULL,
  PRIMARY KEY (`IDUSUARIO`),
  INDEX `fk_USUARIO_TIPODEUSUARIO1_idx` (`TIPODEUSUARIO_IDTIPODEUSUARIO` ASC),
  CONSTRAINT `fk_USUARIO_TIPODEUSUARIO1`
    FOREIGN KEY (`TIPODEUSUARIO_IDTIPODEUSUARIO`)
    REFERENCES `mydb`.`tipodeusuario` (`IDTIPODEUSUARIO`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `mydb`.`almacen`
-- -----------------------------------------------------
START TRANSACTION;
USE `mydb`;
INSERT INTO `mydb`.`almacen` (`IDALMACEN`, `NOMBRE`, `UNILIBRES`, `UNIMAX`) VALUES (1, 'Ender', 20, 20);
INSERT INTO `mydb`.`almacen` (`IDALMACEN`, `NOMBRE`, `UNILIBRES`, `UNIMAX`) VALUES (2, 'Perico', 10, 20);

COMMIT;


-- -----------------------------------------------------
-- Data for table `mydb`.`tamano`
-- -----------------------------------------------------
START TRANSACTION;
USE `mydb`;
INSERT INTO `mydb`.`tamano` (`IDTAMANO`, `UNIDADES`) VALUES (1, 1);
INSERT INTO `mydb`.`tamano` (`IDTAMANO`, `UNIDADES`) VALUES (2, 2);
INSERT INTO `mydb`.`tamano` (`IDTAMANO`, `UNIDADES`) VALUES (3, 3);

COMMIT;


-- -----------------------------------------------------
-- Data for table `mydb`.`tipodeusuario`
-- -----------------------------------------------------
START TRANSACTION;
USE `mydb`;
INSERT INTO `mydb`.`tipodeusuario` (`IDTIPODEUSUARIO`, `ADMUSUARIOS`, `ADMALMACEN`, `GENREPORTE`, `ADMTRASLADO`, `NOMBRE`) VALUES (1, false, false, false, false, 'Operador');
INSERT INTO `mydb`.`tipodeusuario` (`IDTIPODEUSUARIO`, `ADMUSUARIOS`, `ADMALMACEN`, `GENREPORTE`, `ADMTRASLADO`, `NOMBRE`) VALUES (2, true, true, true, true, 'Administrador');

COMMIT;


-- -----------------------------------------------------
-- Data for table `mydb`.`usuario`
-- -----------------------------------------------------
START TRANSACTION;
USE `mydb`;
INSERT INTO `mydb`.`usuario` (`IDUSUARIO`, `TIPODEUSUARIO_IDTIPODEUSUARIO`, `COD_TRABAJADOR`, `NOMBRE`, `FECHA_NACIMIENTO`, `TELEFONO`, `PASSWORD`) VALUES (1, 2, '101', 'Ender Bohorquez', '1995-11-1', '04246185127', '159357l');

COMMIT;

