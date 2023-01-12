package main

import (
	"context"
	"errors"
	"math/rand"
	"time"
)

type DivisionInput struct {
	X int `json:"x"`
	Y int `json:"y"`
}

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	rand.Seed(time.Now().Unix())
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

func (a *App) GenerateDivision() (DivisionInput, error) {
	return DivisionInput{generateInRange(10000, 99999), generateInRange(10, 99)}, nil
}

func (a *App) CheckDivision(x, y, v, remainder int) (bool, error) {
	if y == 0 {
		return false, errors.New("division by zero")
	}
	r := x / y
	m := x % y

	return (r == v && m == remainder), nil
}

func generateInRange(min, max int) int {
	return min + rand.Intn(max-min+1)
}
