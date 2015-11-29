initSidebarItems({"enum":[["Api","Describes an OpenGL-related API."],["BlendingFunction","Function that the GPU will use for blending."],["DepthTest","The function that the GPU will use to determine whether to write over an existing pixel on the target."],["DrawError","Error that can happen while drawing."],["GliumCreationError","Error that can happen while creating a glium display."],["Handle","Handle to a shader or a program."],["LinearBlendingFactor","Indicates which value to multiply each component with."],["StencilOperation","Specificies which operation the GPU will do depending on the result of the stencil test."],["StencilTest","Specifies which comparison the GPU will do to determine whether a sample passes the stencil test. The general equation is `(ref & mask) CMP (stencil & mask)`, where `ref` is the reference value (`stencil_reference_value_clockwise` or `stencil_reference_value_counter_clockwise`), `CMP` is the comparison chosen, and `stencil` is the current value in the stencil buffer."],["SwapBuffersError","Error that can happen when swapping buffers."]],"fn":[["get_supported_glsl_version","Given an API version, this function returns the GLSL version that the implementation is required to support."]],"macro":[["assert_no_gl_error!","Calls the `assert_no_error` method on a `glium::Display` instance with file and line number information."],["implement_buffer_content!","Implements the `glium::buffer::Content` trait for the given type."],["implement_uniform_block!","Implements the `glium::uniforms::UniformBlock` trait for the given type."],["implement_vertex!","Implements the `glium::vertex::Vertex` trait for the given type."],["program!","Builds a program depending on the GLSL version supported by the backend."],["uniform!","Returns an implementation-defined type which implements the `Uniform` trait."]],"mod":[["backend","The `backend` module allows one to link between glium and the OpenGL context.."],["buffer","A buffer is a memory location accessible to the video card."],["debug",""],["draw_parameters","Describes miscellaneous parameters to be used when drawing."],["framebuffer","Framebuffers allow you to customize the color, depth and stencil buffers you will draw on."],["index","In order to draw, you need to provide a way for the video card to know how to link primitives together."],["pixel_buffer","DEPRECATED. Moved to the `texture` module."],["program",""],["texture","A texture is an image loaded in video memory, which can be sampled in your shaders."],["uniforms","A uniform is a global variable in your program. In order to draw something, you will need to give `glium` the values of all your uniforms. Objects that implement the `Uniform` trait are here to do that."],["vertex","Contains everything related to vertex sources."]],"struct":[["Blend","Blend effect that the GPU will use for blending."],["BlitTarget","Area of a surface in pixels. Similar to a `Rect` except that dimensions can be negative."],["Depth","Represents the depth parameters of a draw command."],["Frame","Implementation of `Surface`, targeting the default framebuffer."],["IndexBuffer","A list of indices loaded in the graphics card's memory."],["LinearSyncFence","Prototype for a `SyncFence`."],["Program","A combination of shaders linked together."],["Rect","Area of a surface in pixels."],["SyncFence","Provides a way to wait for a server-side operation to be finished."],["Version","Describes a version."],["VertexBuffer","A list of vertices loaded in the graphics card's memory."]],"trait":[["CapabilitiesSource","Trait for objects that describe the capabilities of an OpenGL backend."],["DisplayBuild","Objects that can build a facade object."],["GlObject","Trait for objects that are OpenGL objects."],["Surface","Object that can be drawn upon."]],"type":[["VertexFormat","Describes the layout of each vertex in a vertex buffer."]]});