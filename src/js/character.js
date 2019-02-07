/**
 *  Создание персонажа
 *
 * @param {string} name - Имя персонажа (от 2 до 10 символов)
 * @param {string} type - Тип персонажа (Bowman, Swordsman, Magician, Daemon, Undead, Zombie)
 *
 * @throws Вернется ошибка при неверном типе персонажа
 * или при имени персонажа короче 2х или длиннее 10 символов
 */

function Character(name, type) {
  this.name = name;
  this.type = type;
}

export default Character;
