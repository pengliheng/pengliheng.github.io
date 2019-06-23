package main

import (
	"fmt"
	"net/http"
)

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "Welcome to my website!33")
	})

	fs := http.FileServer(http.Dir("dist/"))
	http.Handle("/dist/", http.StripPrefix("/dist/", fs))

	http.ListenAndServe(":80", nil)

}
