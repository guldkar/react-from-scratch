export class ExtendedDate extends Date {
  getFormattedDate() {
    let month = this.getMonth() + 1;
    let year = this.getFullYear();
    return `${month}/${year}`;
  }
}