async function getData() {
    let travelData: any[] = [];
    try {
        let ticketInfo, bookingInfo;
        await Promise.all([ticketInfo = await getTicket(42), bookingInfo = await getBook(9)]);
        let visaInfo = await getVisa(ticketInfo, bookingInfo, 123);
        travelData = [ticketInfo, bookingInfo, visaInfo];
        let obj: any = {};
        travelData.map(item => {
            if (typeof item === "object")
                for (let i in item)
                    obj[i] = item[i];
        });
        console.log(obj);
    } catch (err) {
        console.log(err);
    } finally {
        console.log(travelData);
    }
}

async function getTicket(ticketNumber: number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let temp = true;
            if (temp) {
                resolve({ person: "Alex", passportData: 123456, date: "01/01/2020", business: false });
            } else {
                reject("getTicket() error");
            }
        }, 1000);
    });
}
async function getBook(bookingNumber: number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let temp = true;
            if (temp) {
                resolve({ person: "Alex", passportData: 123456, checkInDate: "01/01/2020", days: 7, nights: 6, rooms: 1, guests: 2 });
            } else {
                reject("getTicket() error");
            }
        }, 1000);
    });
}
async function getVisa(ticketData: any, bookingData: any, requestNumber: number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (ticketData !== null && bookingData !== null) {
                resolve({ person: "Alex", passportData: 123456, begin: "31/12/2019", end: "31/03/2020", daysLeft: 30, approved: true });
            } else {
                reject("getTicket() error");
            }
        }, 1000);
    });
}

getData();