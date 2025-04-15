class Toast {
  constructor(message, timestamp) {
    this.message = message;
    this.timestamp = timestamp;
    this.element = null;
    this.timeoutId = null;
  }

  create() {
    const toast = document.createElement('div');
    toast.className = 'toast';

    const header = document.createElement('div');
    header.className = 'toast-header';
    header.textContent = this.message;

    const timestamp = document.createElement('div');
    timestamp.className = 'toast-timestamp';
    timestamp.textContent = this.formatTimestamp(this.timestamp);

    const actions = document.createElement('div');
    actions.className = 'toast-actions';

    const undoButton = document.createElement('button');
    undoButton.className = 'undo-button';
    undoButton.textContent = 'Undo';
    undoButton.onclick = () => this.handleUndo();

    actions.appendChild(undoButton);
    toast.appendChild(header);
    toast.appendChild(timestamp);
    toast.appendChild(actions);

    this.element = toast;
    return toast;
  }

  formatTimestamp(date) {
    return date.toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });
  }

  handleUndo() {
    // Add your undo logic here
    console.log('Undo clicked');
    this.remove();
  }

  remove() {
    if (this.element) {
      this.element.style.animation = 'slideOut 0.3s ease-in-out';
      setTimeout(() => {
        this.element.remove();
      }, 300);
    }
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }
}

class ToasterManager {
  constructor() {
    this.container = null;
    this.init();
  }

  init() {
    this.container = document.createElement('div');
    this.container.className = 'toaster-container';
    document.body.appendChild(this.container);
  }

  show(message, duration = 5000) {
    const toast = new Toast(message, new Date());
    const toastElement = toast.create();
    this.container.appendChild(toastElement);

    toast.timeoutId = setTimeout(() => {
      toast.remove();
    }, duration);
  }
}

// Initialize the toaster manager
const toaster = new ToasterManager();

// Function to show toast (can be triggered by button click)
function showToast() {
  toaster.show('Event has been created');
}
