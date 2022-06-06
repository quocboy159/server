import { Router } from 'express';
import { getAll, addUser } from '../controllers/users.controllers';
import { createUserValidator } from '../validators/users.validators';
var router = Router();

/* GET users listing. */
router.get('/users', getAll);
router.post('/users', createUserValidator(), addUser);

export default router;
