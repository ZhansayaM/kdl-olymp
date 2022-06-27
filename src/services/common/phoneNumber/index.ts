export interface IPhoneNumber {
  phoneNumber(phone: string): string
  phoneNumberFormat(phone: string): string
}

export default class PhoneNumber implements IPhoneNumber {
  phoneNumber(phone: string) {
    for (let i = phone.length - 1; i >= 0; i--)
      if (isNaN(parseInt(phone[i]) as any))
        phone = phone.slice(0, i) + phone.slice(i + 1, phone.length)
    let prefix = phone.length < 10 ? '+77172' : '+'
    let number = phone.length < 10 ? phone.slice(phone.length - 6) : phone
    return prefix + number
  }
  phoneNumberFormat(phone: string) {
    let number = '',
      sequence = [2, 3, 3, 2, 2],
      last = 0
    for (let i = 0; i < sequence.length; i++) {
      number += phone.slice(last, last + sequence[i]) + ' '
      last = last + sequence[i]
    }
    return number.slice(0, number.length - 1)
  }
}
