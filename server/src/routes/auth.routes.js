import { Router } from 'express'; 

import { handleSignUp } from '../controllers/auth.controllers';
import { validatesSignUp } from '../middleware/validation.middleware';

const router = Router(); // Use Router() 

// Define routes
router.post('/signup', validatesSignUp, handleSignUp);

// Export the router
export default router;