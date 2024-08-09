function deleteId(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }

    if (Array.isArray(obj)) {
        return obj.map(deleteId);
    }

    const { _id, ...rest } = obj;
    const updatedObj = { ...rest };

    Object.keys(updatedObj).forEach(key => {
        updatedObj[key] = deleteId(updatedObj[key]);
    });

    return updatedObj;
}

export default deleteId;