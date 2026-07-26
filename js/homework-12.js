class Window {
  constructor(title) {
    this.title = title;
    this.isOpen = false;
  }

  open() {
    this.isOpen = true;
    console.log(`${this.title} is open`);
  }

  close() {
    this.isOpen = false;
    console.log(`${this.title} is close`)
  }
}

class Explorer extends Window {
  constructor(title, currenrFolder) {
    super(title);
    this.currenrFolder = currenrFolder;
  }

  find(fileName) {
    console.log(`File search: ${fileName}`)
  }
}

class ControlPanel extends Window {
  constructor(title, section) {
    super(title);
    this.section = section;
  }

  changeSetting(setting) {
    console.log(`Changing setting: ${setting}`);
  }
}

const explorer = new Explorer("Explorer", "Documents");
const control = new ControlPanel("Control panel", ["System", "Network", "Devices"]);

explorer.open();
explorer.find("photo.jpg");
explorer.close();

control.open();
control.changeSetting("Wi-Fi");
control.close();

