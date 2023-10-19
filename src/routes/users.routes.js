const { Router } = require("express")

const UsersController = require("../controller/UsersController")

const usersRoutes = Router()

const userController = new UsersController()

usersRoutes.post('/', userController.create)

module.exports = usersRoutes