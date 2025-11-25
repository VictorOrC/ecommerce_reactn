import { scrensName } from "../../../utils";

export const accountMenu = [
  {
    title: "Cambiar nombre y apellido",
    description: "Cambiar nombre de tu cuenta",
    leftIcon: "emoticon-excited-outline",
    screen: scrensName.account.changeName,
  },
  {
    title: "Cambiar email",
    description: "Cambia el email de tu cuenta",
    leftIcon: "at",
    screen: scrensName.account.changeEmail,
  },
  {
    title: "Cambiar nombre de usuario",
    description: "Cambiar nombre de usuario de tu cuenta",
    leftIcon: "card-account-details-outline",
    screen: scrensName.account.changeUsername,
  },
  {
    title: "Cambiar contraseña de usuario",
    description: "Cambiar contraseña de tu cuenta",
    leftIcon: "key-outline",
    screen: scrensName.account.changePassword,
  },
];

export const appMenu = [
  {
    title: "Pedidos",
    description: "Lista de todos los pedidos",
    leftIcon: "order-bool-descending-variant",
    screen: scrensName.account.orders,
  },
  {
    title: "Mis direcciones",
    description: "Administra tus direcciones de envio",
    leftIcon: "map-marker-outline",
    screen: scrensName.account.addresses,
  },
  {
    title: "Lista de deseos",
    description: "Lista de todos los productos deseados",
    leftIcon: "heart-outline",
    screen: scrensName.wishlist.root,
  },
];
