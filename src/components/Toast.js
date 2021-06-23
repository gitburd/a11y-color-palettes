import React, { useState, useEffect } from 'react';
const Toast = ({ toastList, position }) => {
    const [list, setList] = useState(toastList);
    useEffect(() => {
        setList(toastList);
        const interval = setInterval(() => {
            if (toastList.length && list.length) {
                deleteToast(toastList[0].id);
            }
        }, 2000);
        return () => {
            clearInterval(interval);
        }
    }, [toastList, list]);


    const deleteToast = id => {
        const index = list.findIndex(e => e.id === id);
        list.splice(index, 1);

        const toastListItem = toastList.findIndex(e => e.id === id);
        toastList.splice(toastListItem, 1);

        setList([...list]);
    }
    return (
        <div className={`notification-container ${position}`}>
            {
                list && list.length > 0 && list.map((toast, i) =>
                    <div
                        key={i}
                        className={`notification toast ${position}`}
                        style={{ backgroundColor: toast.backgroundColor }}
                    >
                        <button onClick={() => deleteToast(toast.id)}>
                            X
                        </button>
                        <div className="notification-image">
                            <img src={toast.icon} alt="" />
                        </div>
                        <div>
                            <p className="notification-message">
                                {toast.description}
                            </p>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
export default Toast;