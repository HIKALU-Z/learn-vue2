/**
 * Created by hikalu on 17/6/20.
 */


Vue.component('message', {
    props: ['title', 'body'],
    data(){
        return{
            isVisible: true
        }   
    },
    template: `
        <article class="message" v-show="isVisible">
            <div class="message-header">
                {{title}}
                <button class="delete" @click="isVisible =false"></button>
            </div>
            <div class="message-body">
                {{body}}
            </div>
        </article>
    `
});

Vue.component('task-list', {
    template: `
    <div>
      <task v-for="task in tasks">{{task.task}}</task>
    </div>
    `,

    data() {
        return {
            tasks: [
                { task: '123', id: 1 },
                { task: '123', id: 2 },
                { task: '123', id: 3 },
                { task: '123', id: 4 }
            ]
        }
    }
});

Vue.component('task', {
    template: '<li><slot></slot></li>'
});

new Vue({
    el: '#root',
});
