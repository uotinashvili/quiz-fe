
import { StencilSocket } from 'stencil-socket.io';

export const socket = StencilSocket(process.env.API_HOST);