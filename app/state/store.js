//
// Copyright (C) 2016 Changzhou TwistSnake Co.,Ltd
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//

import Vue from 'vue';
import Vuex from 'vuex';
import Logger from 'vuex/logger';

import auth from './modules/auth';

Vue.use(Vuex);
Vue.config.debug = true;

export default new Vuex.Store({
  strict: true,
  modules: {
    auth
  },
  middlewares: [
    Logger()
  ]
});
