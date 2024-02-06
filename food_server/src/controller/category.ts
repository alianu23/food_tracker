import { NextFunction, Request, Response } from "express";
import Category from "../model/category";
import MyError from "../utils/myError";
import cloudinary from "../utils/cloudinary";

export const createCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newCategory = { ...req.body };
    if (req.file) {
      const { security_url } = cloudinary.uploader.upload(req.file.path);
      newCategory.image = security_url;
    }

    await Category.create(newCategory);
    res.status(201).json({ message: "Category created successfully" });
  } catch (error) {
    next(error);
  }
};
export const getCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { categoryId } = req.params;
    const category = await Category.findById(categoryId);
    if (!category) {
      throw new MyError(`Cannot found ${categoryId}-id category table `, 400);
    }
    res
      .status(200)
      .json({ message: `Found this ${categoryId}-id category`, category });
  } catch (error) {
    next(error);
  }
};
export const getAllCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const categories = await Category.find();
    res.status(200).json({ message: `Found all category`, categories });
  } catch (error) {
    next(error);
  }
};
export const updateCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { categoryId } = req.params;
    const updateCategory = req.body;
    const category = await Category.findByIdAndUpdate(
      categoryId,
      updateCategory
    );
    if (!category) {
      throw new MyError(`Cannot found ${categoryId}-id category table `, 400);
    }
    res
      .status(200)
      .json({ message: `Updated this ${categoryId}-id category`, category });
  } catch (error) {
    next(error);
  }
};
export const deleteCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { categoryId } = req.params;
    const category = await Category.findByIdAndDelete(categoryId);
    if (!category) {
      throw new MyError(`Cannot found ${categoryId}-id category table `, 400);
    }
    res
      .status(200)
      .json({ message: `Deleted this ${categoryId}-id category`, category });
  } catch (error) {
    next(error);
  }
};
