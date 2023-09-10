import { Notyf } from "notyf";

class Notification {
    private notify = new Notyf({
        duration: 3000,
        position: { x: 'center', y: 'top' }
    });

    private extractMessage(error: any): string {
        if (typeof error === 'string') return error; // regular string
        if (typeof error.response?.data === 'string') return error.response.data; // axios exception
        if (typeof error.message === 'string') return error.message; // other exception
        return 'some error, please try again'
    }

    public success(message: string): void {
        this.notify.success(message);
    }

    public error(error: any): void {
        const message = this.extractMessage(error);
        this.notify.error(message);
    }
}

const notification = new Notification();
export default notification;