import React from 'react'

function VirtualDOM() {
  return (
    <div className="wrapper">
      <h1 className='h1'>Виртуальный DOM и детали его реализации в React</h1>
      <h3 className='h3'>Что такое виртуальный DOM?</h3>
      <p className='p'>
        Виртуальный DOM (VDOM) — это концепция программирования, в которой идеальное или «виртуальное» представление пользовательского интерфейса хранится в памяти и синхронизируется с «настоящим» DOM при помощи библиотеки, такой как ReactDOM. Этот процесс называется согласованием.

        Такой подход и делает API React декларативным: вы указываете, в каком состоянии должен находиться пользовательский интерфейс, а React добивается, чтобы DOM соответствовал этому состоянию. Это абстрагирует манипуляции с атрибутами, обработку событий и ручное обновление DOM, которые в противном случае пришлось бы использовать при разработке приложения.

        Поскольку «виртуальный DOM» — это скорее паттерн, чем конкретная технология, этим термином иногда обозначают разные понятия. В мире React «виртуальный DOM» обычно ассоциируется с React-элементами , поскольку они являются объектами, представляющими пользовательский интерфейс. Тем не менее, React также использует внутренние объекты, называемые «волокнами» (fibers), чтобы хранить дополнительную информацию о дереве компонентов. Их также можно считать частью реализации «виртуального DOM» в React.
      </p>
      <h3 className='h3'>Теневой DOM похож на виртуальный DOM?</h3>
      <p className='p'>
        Нет, они совсем разные. Теневой DOM (Shadow DOM) — это браузерная технология, предназначенная в основном для определения области видимости переменных и CSS в веб-компонентах. Виртуальный DOM — это концепция, реализованная библиотеками в JavaScript поверх API браузера.

      </p>
      <h3 className='h3'>Что такое «React Fiber»?</h3>
      <p className='p'>
        Fiber — новый механизм согласования в React 16, основная цель которого сделать рендеринг виртуального DOM инкрементным. Узнать больше об этом.
      </p>
    </div>
  )
}

export default VirtualDOM