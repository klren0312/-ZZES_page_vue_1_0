/**
 * Created by aresn on 16/8/22.
 */
const routers = {
    '/index': {
        component (resolve) {
            require(['./views/index.vue'], resolve);
        }
    },
    '/test':{
    	component(resolve){
    		require(['./components/test.vue'],resolve);
    	}
    },
    '/map':{
    	component(resolve){
    		require(['./components/map.vue'],resolve);
    	}
    },
    '/subject':{
    	component(resolve){
    		require(['./components/subject.vue'],resolve);
    	}
    },
    '/aboutus':{
    	component(resolve){
    		require(['./components/aboutus.vue'],resolve);
    	}
    }
};
export default routers;