package main

import "fmt"

const LoginToken string = "gibberish"

func main() {
	var userName string = "Anil"
	fmt.Printf("Hello, %T \n", userName)
	var isAvailable bool = false
	fmt.Printf("Hello, %T \n", isAvailable)
	var number int = 200
	fmt.Printf("Hello, %T \n", number)
	number2 := 200
	fmt.Printf("Hello, %T \n", number2)
	fmt.Println(userName, LoginToken)
}
