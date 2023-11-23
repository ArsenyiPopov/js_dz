// • Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать. Каждая итерация должна возвращать следующий альбом из коллекции.

// • Создайте объект musicCollection, который содержит массив альбомов и имеет свойство-символ Symbol.iterator. Каждый альбом имеет следующую структуру:
// • Реализуйте кастомный итератор для объекта musicCollection. Итератор должен перебирать альбомы по порядку.
// • Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате: Название альбома - Исполнитель (Год выпуска)

// Создаем объект "Музыкальная коллекция"   
const musicCollection = {
    // Массив альбомов
    albums: [
      {
        title: "Альбом 1",
        artist: "Исполнитель 1",
        year: "2020",
      },
      {
        title: "Альбом 2",
        artist: "Исполнитель 2",
        year: "2021",
      },
      {
        title: "Альбом 3",
        artist: "Исполнитель 3",
        year: "2022",
      },
    ],

    // Свойство-символ Symbol.iterator
    [Symbol.iterator]: function() {
        let index = 0; // Индекс текущего альбома

        // Метод next() для итератора
        return {
            next: () => {
                if (index < this.albums.length) {
                    const album = this.albums[index++];
                    return { value: album, done: false };
                } else {
                    return { done: true };
                }
            }
        };
    }
};

// Используем цикл for...of для перебора и вывода альбомов
for (const album of musicCollection) {
    console.log(`${album.title} - ${album.artist} (${album.year})`);
}

// Вы управляете рестораном, в котором работают разные повара, специализирующиеся на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.

// Необходимо создать систему управления этими заказами, которая позволит:

// • Отслеживать, какой повар готовит какое блюдо.
// • Записывать, какие блюда заказал каждый клиент.

// Создаем Map для хранения информации о поварах и их специализации
const chefsSpecialization = new Map([
    ['Виктор', 'Пицца'],
    ['Ольга', 'Суши'],
    ['Дмитрий', 'Десерты'],
  ]);
  
  // Создаем Map для хранения информации о блюдах и их поварах
  const dishesAndChefs = new Map([
    ['Пицца "Маргарита"', 'Виктор'],
    ['Пицца "Пепперони"', 'Виктор'],
    ['Суши "Филадельфия"', 'Ольга'],
    ['Суши "Калифорния"', 'Ольга'],
    ['Тирамису', 'Дмитрий'],
    ['Чизкейк', 'Дмитрий'],
  ]);
  
  // Создаем Map для хранения заказов клиентов
  const customerOrders = new Map();
  
  // Заполняем заказы
  const alexeyOrder = new Map([
    ['Пицца "Пепперони"', 1],
    ['Тирамису', 1],
  ]);
  
  const mariaOrder = new Map([
    ['Суши "Калифорния"', 1],
    ['Пицца "Маргарита"', 1],
  ]);
  
  const irinaOrder = new Map([
    ['Чизкейк', 1],
  ]);
  
  // Записываем заказы в общий Map для клиентов
  const alexey = { name: 'Алексей' };
const maria = { name: 'Мария' };
const irina = { name: 'Ирина' };
  
  customerOrders.set(alexey, alexeyOrder);
  customerOrders.set(maria, mariaOrder);
  customerOrders.set(irina, irinaOrder);
  
  // Выводим результаты
  console.log('Специализация поваров:');
for (const [chef, specialization] of chefsSpecialization) {
  console.log(`${chef} - ${specialization}`);
}

console.log('\nБлюда и их повара:');
for (const [dish, chef] of dishesAndChefs) {
  console.log(`${dish} - ${chef}`);
}

console.log('\nЗаказы клиентов:');
for (const [customer, order] of customerOrders) {
  const orderedDishes = Array.from(order.keys()).join(', ');
  console.log(`${customer.name} заказал: ${orderedDishes}`);
}
  
  