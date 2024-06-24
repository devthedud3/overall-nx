interface Chip {
  name: string;
  active?: boolean;
  status: string;
}

interface Button {
  name: string;
  onClick?: () => void;
  gradient?: boolean;
}
