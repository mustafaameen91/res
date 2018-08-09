import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    me: "Hi there, I'm Mustafa from Iraq and I'm a Front-End developer with three years experience and I'm ambition about programming and design web Applications also i love to keep myself up to date with the new technologies.",

    skills:['HTML5','CSS3','BootStrap','Java Script','JQuery','PHP','VueJS','Git','GitHub','Java'],

    freelancer:['Translate design wireframes into responsive, interactive features, using HTML5/CSS3 and JavaScript.',
                'Design and developed GUI for applications and modules, using JavaScript.',
                'Built single-page applications with JavaScript on custom-build framework.',
                'Resolved design issues through root cause analysis and preformed data cleanups.',
                'Tested front-end code in multiple browsers to ensure cross-browser compatibility.',
                'Communicated directly with clients to establish project parameters, wrote proposals for design work, analyzed competitor web sites, determined web site content, produced site maps for client approval, and communicated progress with client throughout length of project.'],

    options:    ['Develop and manage large, complex design projects for corporate clients.',
                'Develop project and maintain optimal workflow.',
                'Complete detailed programming and development tasks for Front-End public and internal Websites.',
                'Carry out quality assurance tests to discover errors and optimize usability.',
                'Closely worked with back-end developers to optimize existing Web technology and create the best possible user experience.']
  },
  mutations: {

  },
  actions: {

  }
})
