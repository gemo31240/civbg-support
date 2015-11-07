/// <reference path="../typings/bundle.d.ts" />
/// <reference path="../typings/lib.ext.d.ts" />

interface Function {
  name: string
}

'use strict';

import 'jquery';

import {appName} from './constants';
import './app.module';
import './app.routes';

import './app/components/components';
