import DropZone from "./DropZone";
import classes from "./Form.module.css";

type Props = {
  formik: any;
};

const Form = ({ formik }: Props) => {
  return (
    <form
      onSubmit={formik.handleSubmit}
      className=" font-nunito grid gap-3 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
    >
      <div className={classes.input_group}>
        <label htmlFor="title" className={classes.input_label}>
          Title
        </label>
        <input
          type="text"
          name="title"
          id="title"
          className={classes.input_control}
          onChange={formik.handleChange}
        />
      </div>

      <div className={classes.input_group}>
        <label htmlFor="location" className={classes.input_label}>
          Location
        </label>
        <input
          type="text"
          name="location"
          id="location"
          className={classes.input_control}
          onChange={formik.handleChange}
        />
      </div>

      <div className="grid grid-cols-1  sm:grid-cols-2 gap-3 md:col-span-2 xl:col-span-1">
        <div className={classes.input_group}>
          <label htmlFor="longitude" className={classes.input_label}>
            Longitude
          </label>
          <input
            type="text"
            name="longitude"
            id="longitude"
            className={" inline " + classes.input_control}
          />
        </div>

        <div className={classes.input_group}>
          <label htmlFor="latitude" className={classes.input_label}>
            Latitude
          </label>
          <input
            type="text"
            name="latitude"
            id="latitude"
            className={classes.input_control}
          />
        </div>
      </div>

      <DropZone formik={formik} />

      <div className={classes.input_group}>
        <label htmlFor="description" className={classes.input_label}>
          Description
        </label>
        <input
          type="text"
          name="description"
          id="description"
          className={classes.input_control}
        />
      </div>

      <div className={classes.input_group}>
        <label htmlFor="price" className={classes.input_label}>
          Price
        </label>
        <input
          type="number"
          name="price"
          id="price"
          step="0.01"
          className={classes.input_control}
        />
      </div>
      <div className="md:col-span-2 xl:col-span-3 flex justify-center mt-6 ">
        <button className="bg-blue-500 hover:bg-blue-600 hover:shadow-xl hover:shadow-slate-100 w-full py-2 rounded-lg  max-w-xs text-lg tracking-wider text-white font-bold">
          Create
        </button>
      </div>
    </form>
  );
};

export default Form;

// sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3
