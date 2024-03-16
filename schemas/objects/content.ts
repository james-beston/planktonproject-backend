import { CgImage, CgFileDocument, CgSize, CgCheckR } from "react-icons/cg";
export default {
  name: 'content',
  title: 'Text Content',
  type: 'array',
  of: [
    { type: 'block' },
    { name: 'image', type: 'image', title: 'Image', icon: CgImage},
    { name: 'file', type: 'file', title: 'File', icon: CgFileDocument},
    { name: 'dimensions', type: 'table', title: 'Dimensions', icon: CgSize},
    { name: 'presence', type: 'table', title: 'Presence', icon: CgCheckR}
  ]
}