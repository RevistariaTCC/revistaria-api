import prisma from "../../adapters/prisma-adapter"
import AppError from "../../errors/AppError";

class UpdateReservation {
  public async execute(id: string) {
    try {
      const reservation = await prisma.reservation.findUnique({
        where: {
          id: id
        }
      })
  
      if(!reservation) throw new AppError('Reservation not found!', 404);

      return await prisma.reservation.update({
        where: {
          id: id
        },
        data: {
          claimed: true,
          claimedDate: new Date()
        }
      })
    } catch (error) {
      throw error;
    }

  }
}

export default UpdateReservation