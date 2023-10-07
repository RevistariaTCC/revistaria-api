import prisma from "../../adapters/prisma-adapter";
import { PartialVolume } from '../../schemas/volume';
import AppError from '../../errors/AppError';

class UpdateVolume {
  public async execute(params: PartialVolume) {
    const { id, ...rest } = params;

    // Buscar o volume na base, caso não exista retornar um erro
    const volume = await prisma.volume.findUnique({
      where: {
        id: id
      }
    })

    if (!volume) throw new AppError("Volume not found!", 404)

    return await prisma.volume.update({
      where: {
        id: id
      },
      data: { ...rest }
    });
  }
}

export default UpdateVolume;
