/**
 * Serviço responsável por executar
 * as operações da calculadora.
 * 
 * @author Apoliano Junior <jrmorais3@gmail.com>
 * @since 1.0.0
 *
 */


import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  /* Define as constantes utilizadas para 
    identificar as operações de cálculo*/

  static readonly SOMA: string = '+';
  static readonly SUBTRAÇÃO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICACAO: string = '*';

  constructor() { }

  /**
   * 
   * @param num1 number
   * @param num2 number
   * @param operacao string operação a ser executada
   * @returns number resultado da operação
   * 
   */

  calcular(num1: number, num2: number, operacao: string): number {

    let resultado: number; //armazena o resultado da operação

    switch (operacao) {
      case CalculadoraService.SOMA:
        resultado = num1 + num2;
        break;
      case CalculadoraService.SUBTRAÇÃO:
        resultado = num1 - num2;
        break;
      case CalculadoraService.DIVISAO:
        resultado = num1 / num2;
        break;
      case CalculadoraService.MULTIPLICACAO:
        resultado = num1 * num2;
        break;
      default:
        resultado = 0;
        break;
    }
    return resultado;
  }
}
