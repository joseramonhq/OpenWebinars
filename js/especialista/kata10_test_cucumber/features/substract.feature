Feature: Tengo que restar dos numeros
	Como usuaario lo que quiero es restar dos numeros positivos

	Scenario: Es resultado de 15 menos 10 tiene que ser 5
		Given que tengo 15 y 10
		When resto 15 menos 10
		Then el resultado tiene que ser 5
