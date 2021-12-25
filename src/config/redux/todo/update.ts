export const updateTodo = (oldData: any, newData: any) => {
    const dataFilter = oldData.filter((data: any) => {
        return data.id !== newData.id
    });

    return [
        ...dataFilter, {
            ...newData.data,
            id: newData.id,
            createdAt: new Date().toUTCString()
        }
    ]
}