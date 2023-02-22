package main

import (
    "encoding/base64"
    "fmt"
)

func main() {
    secret := "my_secret_key"
    key := []byte(secret)
    encodedKey := base64.RawURLEncoding.EncodeToString(key)
    fmt.Println(encodedKey)
}