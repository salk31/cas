package org.apereo.cas.web.view;

import org.springframework.http.MediaType;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.servlet.View;

import javax.annotation.Nonnull;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Map;

/**
 * This is {@link DynamicHtmlView}.
 *
 * @author Misagh Moayyed
 * @since 5.3.0
 */
public record DynamicHtmlView(String html) implements View {
    @Override
    public String getContentType() {
        return MediaType.TEXT_HTML_VALUE;
    }

    @Override
    public void render(final Map<String, ?> model,
                       @Nonnull
                       final HttpServletRequest request,
                       final HttpServletResponse response) throws Exception {
        response.setContentType(this.getContentType());
        FileCopyUtils.copy(this.html, response.getWriter());
    }
}
