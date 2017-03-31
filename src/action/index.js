export const ACTION_NAME = 'ACTION_NAME';

export function actionParser(data) {
    return{
        type: ACTION_NAME,
        payload: data
    }
}