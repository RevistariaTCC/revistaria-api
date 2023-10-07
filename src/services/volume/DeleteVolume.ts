import prisma from "../../adapters/prisma-adapter";
import AppError from '../../errors/AppError';

class DeleteVolume {
  public async execute(id: string) {
    const volume = await prisma.volume.findUnique({
      where: {
        id: id
      }
    })

    if (!volume)
      throw new AppError("Volume not found!", 404)

    return await prisma.volume.delete({
      where: {
        id: id
      }
    });
  }
}

export default DeleteVolume;
