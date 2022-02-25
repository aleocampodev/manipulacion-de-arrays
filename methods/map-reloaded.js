const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 180,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
];
console.log('original', orders)
const newArray= orders.map(order => (
	order.total
))
console.log('newArray',newArray)

//Quiero agregar un nuevo atributo a cada uno de los elementos
const newArray2= orders.map(order =>  {
	
	
	return {...order , tax: .19}
}
)

console.log(newArray2)

/* const rta = orders.map(item => {
	item.tax = .19;
	return item
})
console.log('rta2',rta2*/