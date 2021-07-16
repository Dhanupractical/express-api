import express from 'express'
import { deleteUser, getById, getUsers, patchUser, postUser } from '../controllers/users.js';

const router=express.Router();

router.get ('/',getUsers)
router.post('/',postUser)
router.get('/:id',getById)
router.delete('/:id',deleteUser)
router.patch('/:id',patchUser)
export default router;