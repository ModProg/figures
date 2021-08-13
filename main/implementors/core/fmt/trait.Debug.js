(function() {var implementors = {};
implementors["figures"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"figures/enum.Angle.html\" title=\"enum figures::Angle\">Angle</a>&lt;T&gt;","synthetic":false,"types":["figures::angle::Angle"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"figures/struct.Points.html\" title=\"struct figures::Points\">Points</a>","synthetic":false,"types":["figures::displayable::Points"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"figures/struct.Pixels.html\" title=\"struct figures::Pixels\">Pixels</a>","synthetic":false,"types":["figures::displayable::Pixels"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"figures/struct.Scaled.html\" title=\"struct figures::Scaled\">Scaled</a>","synthetic":false,"types":["figures::displayable::Scaled"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"figures/struct.DisplayScale.html\" title=\"struct figures::DisplayScale\">DisplayScale</a>&lt;T&gt;","synthetic":false,"types":["figures::displayable::DisplayScale"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>, Unit&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"figures/struct.Figure.html\" title=\"struct figures::Figure\">Figure</a>&lt;T, Unit&gt;","synthetic":false,"types":["figures::figure::Figure"]},{"text":"impl&lt;T, Unit&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"figures/enum.Rect.html\" title=\"enum figures::Rect\">Rect</a>&lt;T, Unit&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,&nbsp;</span>","synthetic":false,"types":["figures::rect::Rect"]},{"text":"impl&lt;T, Unit&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"figures/struct.SizedRect.html\" title=\"struct figures::SizedRect\">SizedRect</a>&lt;T, Unit&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,&nbsp;</span>","synthetic":false,"types":["figures::rect::SizedRect"]},{"text":"impl&lt;T, Unit&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"figures/struct.ExtentsRect.html\" title=\"struct figures::ExtentsRect\">ExtentsRect</a>&lt;T, Unit&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,&nbsp;</span>","synthetic":false,"types":["figures::rect::ExtentsRect"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>, UnitA, UnitB&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"figures/struct.Scale.html\" title=\"struct figures::Scale\">Scale</a>&lt;T, UnitA, UnitB&gt;","synthetic":false,"types":["figures::scale::Scale"]},{"text":"impl&lt;T, Unit&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"figures/struct.Size.html\" title=\"struct figures::Size\">Size</a>&lt;T, Unit&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,&nbsp;</span>","synthetic":false,"types":["figures::vectorlike::Size"]},{"text":"impl&lt;T, Unit&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"figures/struct.Point.html\" title=\"struct figures::Point\">Point</a>&lt;T, Unit&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,&nbsp;</span>","synthetic":false,"types":["figures::vectorlike::Point"]},{"text":"impl&lt;T, Unit&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"figures/struct.Vector.html\" title=\"struct figures::Vector\">Vector</a>&lt;T, Unit&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,&nbsp;</span>","synthetic":false,"types":["figures::vectorlike::Vector"]}];
implementors["xtask"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"xtask/enum.Args.html\" title=\"enum xtask::Args\">Args</a>","synthetic":false,"types":["xtask::Args"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()