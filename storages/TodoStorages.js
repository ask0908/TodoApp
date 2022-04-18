import AsyncStorage from '@react-native-community/async-storage';

const KEY = 'todos';

const TodoStorage = {
    async get() {
        try {
            const rawTodos = await AsyncStorage.getItem(KEY);
            if (!rawTodos) {
                // 저장된 데이터가 없으면 사용하지 않음
                throw new Error('저장된 데이터가 없습니다');
            }
            const savedTodos = JSON.parse(rawTodos);
            return savedTodos;
        } catch (error) {
            // throw new Error('데이터를 불러오지 못했습니다');
        }
    },
    async set(data) {
        try {
            await AsyncStorage.setItem(KEY, JSON.stringify(data));
        } catch (error) {
            console.log('데이터를 저장하는 데 실패했습니다');
        }
    },
};

export default TodoStorage;
