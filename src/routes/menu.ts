import { Router } from 'express';
import {
  getMenuPhotos,
  addMenuPhoto,
  deleteMenuPhoto,
  changeThumbPhoto,
} from '../controllers/menus';

const router = Router();

router.get('/:menuId/images', getMenuPhotos);
router.post('/:menuId/images', addMenuPhoto);
router.post('/best', changeThumbPhoto);
router.delete('/:menuId/images/:photoId', deleteMenuPhoto);

export default router;
