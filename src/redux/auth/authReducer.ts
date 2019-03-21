/*
 * Copyright (C) 2018 Matus Zamborsky
 * This file is part of The Ontology Wallet&ID.
 *
 * The The Ontology Wallet&ID is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * The Ontology Wallet&ID is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with The Ontology Wallet&ID.  If not, see <http://www.gnu.org/licenses/>.
 */
import { Reducer } from "redux";
import { CLEAR_WALLET, SET_WALLET } from "./authActions";
import { Wallet } from "ontology-ts-sdk";

export interface AuthState {
  wallet: Wallet | null;
}

const walletCash = localStorage.getItem("wallet");
// TODO: move seperate reducer
const defaultState: AuthState = { wallet: (walletCash && JSON.parse(walletCash)) || null };

export const authReducer: Reducer<AuthState> = (state = defaultState, action) => {
  switch (action.type) {
    case CLEAR_WALLET:
      return { ...state, wallet: null };
    case SET_WALLET:
      localStorage.setItem("wallet", JSON.stringify(action.wallet));
      return { ...state, wallet: action.wallet };
    default:
      return state;
  }
};
