# Figures

A primarily integer-based 2d graphics math library.

## Inspiration

Sharp graphics are achieved by ensuring that drawing is aligned to pixel
boundaries. If a 1px-squre dot is drawn at 0.5 pixels offset, the dot will look
fuzzy because its color will be shared across multiple pixels. While this can
give the illusion of subpixel imaging, it can also be undesired on high-dpi
displays.

This library embraces integer types for its data representation to allow for
predictable math to be performed without loss of precision.

## Pixels (`Px`) and Device-Independent Pixels (`Lp`)

In this crate, a pixel (`Px`) is a single colorable location on a screen. A
display's resolution, such as 1920x1080, is its measurement in pixels. A pixel
can vary in size greatly -- a modern smartphone's display is often over 300
pixels per inch while a 23-inch 1080p monitor contains roughly 96
pixels-per-inch (ppi).

As an alternative to pixels, this crate also provides its own measurement unit:
device-independent pixels (`Lp`). This type offers many constructors using
real-world measurements that developers and designers are familiar with, and
handles converting to the display's scale for the developer.
