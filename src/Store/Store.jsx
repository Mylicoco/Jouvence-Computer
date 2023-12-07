import {legacy_createStore } from 'redux';
import { createStore } from 'redux'
import onlineStoreApp from '../Reducers/item.reducer';
export const Store = legacy_createStore(onlineStoreApp);